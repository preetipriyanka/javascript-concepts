( function ( global ) {

	'use strict';

	var Promise, PENDING = {}, FULFILLED = {}, REJECTED = {};

	if ( typeof global.Promise === 'function' ) {
		Promise = global.Promise;
	} else {
		Promise = function ( callback ) {
			var fulfilledHandlers = [],
				rejectedHandlers = [],
				state = PENDING,

				result,
				dispatchHandlers,
				makeResolver,
				fulfil,
				reject,

				promise;

			makeResolver = function ( newState ) {
				return function ( value ) {
					if ( state !== PENDING ) {
						return;
					}

					result = value;
					state = newState;

					dispatchHandlers = makeDispatcher( ( state === FULFILLED ? fulfilledHandlers : rejectedHandlers ), result );

					// dispatch onFulfilled and onRejected handlers asynchronously
					wait( dispatchHandlers );
				};
			};

			fulfil = makeResolver( FULFILLED );
			reject = makeResolver( REJECTED );

			callback( fulfil, reject );

			promise = {
				// `then()` returns a Promise - 2.2.7
				then: function ( onFulfilled, onRejected ) {
					var promise2 = new Promise( function ( fulfil, reject ) {

						var processResolutionHandler = function ( handler, handlers, forward ) {

							// 2.2.1.1
							if ( typeof handler === 'function' ) {
								handlers.push( function ( p1result ) {
									var x;

									try {
										x = handler( p1result );
										resolve( promise2, x, fulfil, reject );
									} catch ( err ) {
										reject( err );
									}
								});
							} else {
								// Forward the result of promise1 to promise2, if resolution handlers
								// are not given
								handlers.push( forward );
							}
						};

						// 2.2
						processResolutionHandler( onFulfilled, fulfilledHandlers, fulfil );
						processResolutionHandler( onRejected, rejectedHandlers, reject );

						if ( state !== PENDING ) {
							// If the promise has resolved already, dispatch the appropriate handlers asynchronously
							wait( dispatchHandlers );
						}

					});

					return promise2;
				}
			};

			promise[ 'catch' ] = function ( onRejected ) {
				return this.then( null, onRejected );
			};

			return promise;
		};

		Promise.all = function ( promises ) {
			return new Promise( function ( fulfil, reject ) {
				var result = [], pending, i, processPromise;

				if ( !promises.length ) {
					fulfil( result );
					return;
				}

				processPromise = function ( i ) {
					promises[i].then( function ( value ) {
						result[i] = value;

						if ( !--pending ) {
							fulfil( result );
						}
					}, reject );
				};

				pending = i = promises.length;
				while ( i-- ) {
					processPromise( i );
				}
			});
		};

		Promise.race = function ( promises ) {
			return new Promise( function ( fulfil, reject ) {
				promises.forEach( function ( promise ) {
					promise.then( fulfil, reject );
				});
			});
		};

		Promise.resolve = function ( value ) {
			return new Promise( function ( fulfil ) {
				fulfil( value );
			});
		};

		Promise.reject = function ( reason ) {
			return new Promise( function ( fulfil, reject ) {
				reject( reason );
			});
		};
	}

	// TODO use MutationObservers or something to simulate setImmediate
	function wait ( callback ) {
		setTimeout( callback, 0 );
	}

	function makeDispatcher ( handlers, result ) {
		return function () {
			var handler;

			while ( handler = handlers.shift() ) {
				handler( result );
			}
		};
	}

	function resolve ( promise, x, fulfil, reject ) {
		// Promise Resolution Procedure
		var then;

		// 2.3.1
		if ( x === promise ) {
			throw new TypeError( 'A promise\'s fulfillment handler cannot return the same promise' );
		}

		// 2.3.2
		if ( x instanceof Promise ) {
			x.then( fulfil, reject );
		}

		// 2.3.3
		else if ( x && ( typeof x === 'object' || typeof x === 'function' ) ) {
			try {
				then = x.then; // 2.3.3.1
			} catch ( e ) {
				reject( e ); // 2.3.3.2
				return;
			}

			// 2.3.3.3
			if ( typeof then === 'function' ) {
				var called, resolvePromise, rejectPromise;

				resolvePromise = function ( y ) {
					if ( called ) {
						return;
					}
					called = true;
					resolve( promise, y, fulfil, reject );
				};

				rejectPromise = function ( r ) {
					if ( called ) {
						return;
					}
					called = true;
					reject( r );
				};

				try {
					then.call( x, resolvePromise, rejectPromise );
				} catch ( e ) {
					if ( !called ) { // 2.3.3.3.4.1
						reject( e ); // 2.3.3.3.4.2
						called = true;
						return;
					}
				}
			}

			else {
				fulfil( x );
			}
		}

		else {
			fulfil( x );
		}
	}



	// export as node module
	if ( typeof module !== 'undefined' && module.exports ) {
		module.exports = Promise;
	}

	// or as AMD module
	else if ( typeof define === 'function' && define.amd ) {
		define( function () { return Promise; });
	}

	global.Promise = Promise;

}( typeof window !== 'undefined' ? window : this ));