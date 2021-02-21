(this.webpackJsonpspacexhomework=this.webpackJsonpspacexhomework||[]).push([[1],{137:function(t,e,r){"use strict";r.d(e,"a",(function(){return m}));var n=r(1),s=r(6),i=r(2),u=r(8),o=r(19),a=r(14),c=r(26),l=function(t){function e(e,r){var n;return(n=t.call(this)||this).client=e,n.options=r,n.trackedProps=[],n.bindMethods(),n.setOptions(r),n}Object(s.a)(e,t);var r=e.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),h(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnReconnect||!1!==e.refetchOnReconnect&&f(t,e));var t,e},r.shouldFetchOnWindowFocus=function(){return t=this.currentQuery,!1!==(e=this.options).enabled&&("always"===e.refetchOnWindowFocus||!1!==e.refetchOnWindowFocus&&f(t,e));var t,e},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(t,e){var r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(t),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();var s=this.hasListeners();s&&d(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(e),!s||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout(),!s||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.refetchInterval===r.refetchInterval||this.updateRefetchInterval()},r.getOptimisticResult=function(t){var e=this.client.defaultQueryObserverOptions(t),r=this.client.getQueryCache().build(this.client,e);return this.createResult(r,e)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(t){var e=this,r={};return Object.keys(t).forEach((function(n){Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:function(){var r=n;return e.trackedProps.includes(r)||e.trackedProps.push(r),t[r]}})})),r},r.getNextResult=function(t){var e=this;return new Promise((function(r,n){var s=e.subscribe((function(e){e.isFetching||(s(),e.isError&&(null==t?void 0:t.throwOnError)?n(e.error):r(e))}))}))},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(t){return this.fetch(t)},r.fetchOptimistic=function(t){var e=this,r=this.client.defaultQueryObserverOptions(t),n=this.client.getQueryCache().build(this.client,r);return n.fetch().then((function(){return e.createResult(n,r)}))},r.fetch=function(t){var e=this;return this.executeFetch(t).then((function(){return e.updateResult(),e.currentResult}))},r.executeFetch=function(t){this.updateQuery();var e=this.currentQuery.fetch(this.options,t);return(null==t?void 0:t.throwOnError)||(e=e.catch(i.h)),e},r.updateStaleTimeout=function(){var t=this;if(this.clearStaleTimeout(),!i.e&&!this.currentResult.isStale&&Object(i.f)(this.options.staleTime)){var e=Object(i.p)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){t.currentResult.isStale||t.updateResult()}),e)}},r.updateRefetchInterval=function(){var t=this;this.clearRefetchInterval(),!i.e&&!1!==this.options.enabled&&Object(i.f)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(t.options.refetchIntervalInBackground||o.a.isFocused())&&t.executeFetch()}),this.options.refetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},r.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},r.createResult=function(t,e){var r,n,s=this.currentQuery,u=this.options,o=this.currentResult,a=this.currentResultState,l=this.currentResultOptions,p=t!==s,v=p?t.state:this.currentQueryInitialState,y=p?this.currentResult:this.previousQueryResult,b=t.state,R=b.dataUpdatedAt,O=b.error,m=b.errorUpdatedAt,S=b.isFetching,Q=b.status,g=!1,I=!1;if(e.optimisticResults){var C=this.hasListeners(),E=!C&&h(t,e),T=C&&d(t,s,e,u);(E||T)&&(S=!0,R||(Q="loading"))}if(e.keepPreviousData&&!b.dataUpdateCount&&(null==y?void 0:y.isSuccess)&&"error"!==Q)r=y.data,R=y.dataUpdatedAt,Q=y.status,g=!0;else if(e.select&&"undefined"!==typeof b.data)if(o&&b.data===(null==a?void 0:a.data)&&e.select===(null==l?void 0:l.select))r=o.data;else try{r=e.select(b.data),!1!==e.structuralSharing&&(r=Object(i.l)(null==o?void 0:o.data,r))}catch(w){Object(c.a)().error(w),O=w,m=Date.now(),Q="error"}else r=b.data;"undefined"!==typeof e.placeholderData&&"undefined"===typeof r&&"loading"===Q&&("undefined"!==typeof(n=(null==o?void 0:o.isPlaceholderData)&&e.placeholderData===(null==l?void 0:l.placeholderData)?o.data:"function"===typeof e.placeholderData?e.placeholderData():e.placeholderData)&&(Q="success",r=n,I=!0));return{status:Q,isLoading:"loading"===Q,isSuccess:"success"===Q,isError:"error"===Q,isIdle:"idle"===Q,data:r,dataUpdatedAt:R,error:O,errorUpdatedAt:m,failureCount:b.fetchFailureCount,isFetched:b.dataUpdateCount>0||b.errorUpdateCount>0,isFetchedAfterMount:b.dataUpdateCount>v.dataUpdateCount||b.errorUpdateCount>v.errorUpdateCount,isFetching:S,isLoadingError:"error"===Q&&0===b.dataUpdatedAt,isPlaceholderData:I,isPreviousData:g,isRefetchError:"error"===Q&&0!==b.dataUpdatedAt,isStale:f(t,e),refetch:this.refetch,remove:this.remove}},r.shouldNotifyListeners=function(t,e){if(!e)return!0;if(t===e)return!1;var r=this.options,n=r.notifyOnChangeProps,s=r.notifyOnChangePropsExclusions;if(!n&&!s)return!0;if("tracked"===n&&!this.trackedProps.length)return!0;var i="tracked"===n?this.trackedProps:n;return Object.keys(t).some((function(r){var n=r,u=t[n]!==e[n],o=null==i?void 0:i.some((function(t){return t===r})),a=null==s?void 0:s.some((function(t){return t===r}));return u&&!a&&(!i||o)}))},r.updateResult=function(t){var e=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(i.n)(this.currentResult,e)){var r={cache:!0};!1!==(null==t?void 0:t.listeners)&&this.shouldNotifyListeners(this.currentResult,e)&&(r.listeners=!0),this.notify(Object(n.a)({},r,t))}},r.updateQuery=function(){var t=this.client.getQueryCache().build(this.client,this.options);if(t!==this.currentQuery){var e=this.currentQuery;this.currentQuery=t,this.currentQueryInitialState=t.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==e||e.removeObserver(this),t.addObserver(this))}},r.onQueryUpdate=function(t){var e={};"success"===t.type?e.onSuccess=!0:"error"===t.type&&(e.onError=!0),this.updateResult(e),this.hasListeners()&&this.updateTimers()},r.notify=function(t){var e=this;u.a.batch((function(){t.onSuccess?(null==e.options.onSuccess||e.options.onSuccess(e.currentResult.data),null==e.options.onSettled||e.options.onSettled(e.currentResult.data,null)):t.onError&&(null==e.options.onError||e.options.onError(e.currentResult.error),null==e.options.onSettled||e.options.onSettled(void 0,e.currentResult.error)),t.listeners&&e.listeners.forEach((function(t){t(e.currentResult)})),t.cache&&e.client.getQueryCache().notify(e.currentQuery)}))},e}(a.a);function h(t,e){return function(t,e){return!1!==e.enabled&&!t.state.dataUpdatedAt&&!("error"===t.state.status&&!1===e.retryOnMount)}(t,e)||function(t,e){return!1!==e.enabled&&t.state.dataUpdatedAt>0&&("always"===e.refetchOnMount||!1!==e.refetchOnMount&&f(t,e))}(t,e)}function d(t,e,r,n){return!1!==r.enabled&&(t!==e||!1===n.enabled)&&f(t,r)}function f(t,e){return t.isStaleByTime(e.staleTime)}var p=r(0),v=r.n(p);function y(){var t=!1;return{clearReset:function(){t=!1},reset:function(){t=!0},isReset:function(){return t}}}var b=v.a.createContext(y()),R=r(65);function O(t,e){var r=v.a.useRef(!1),n=v.a.useState(0)[1],s=Object(R.b)(),i=v.a.useContext(b),o=s.defaultQueryObserverOptions(t);o.optimisticResults=!0,o.onError&&(o.onError=u.a.batchCalls(o.onError)),o.onSuccess&&(o.onSuccess=u.a.batchCalls(o.onSuccess)),o.onSettled&&(o.onSettled=u.a.batchCalls(o.onSettled)),o.suspense&&"number"!==typeof o.staleTime&&(o.staleTime=1e3),(o.suspense||o.useErrorBoundary)&&(i.isReset()||(o.retryOnMount=!1));var a=v.a.useRef();a.current||(a.current=new e(s,o));var c=a.current.getOptimisticResult(o);if(v.a.useEffect((function(){r.current=!0,i.clearReset();var t=a.current.subscribe(u.a.batchCalls((function(){r.current&&n((function(t){return t+1}))})));return a.current.updateResult(),function(){r.current=!1,t()}}),[i]),v.a.useEffect((function(){a.current.setOptions(o,{listeners:!1})}),[o]),o.suspense&&c.isLoading)throw a.current.fetchOptimistic(o).then((function(t){var e=t.data;null==o.onSuccess||o.onSuccess(e),null==o.onSettled||o.onSettled(e,null)})).catch((function(t){i.clearReset(),null==o.onError||o.onError(t),null==o.onSettled||o.onSettled(void 0,t)}));if((o.suspense||o.useErrorBoundary)&&c.isError)throw c.error;return"tracked"===o.notifyOnChangeProps&&(c=a.current.trackResult(c)),c}function m(t,e,r){return O(Object(i.j)(t,e,r),l)}},82:function(t,e,r){}}]);
//# sourceMappingURL=1.67883260.chunk.js.map