mygene={},mygene.url_root="//docs.mygene.info/en/latest/_static/widget/autocomplete/",mygene.input_selector="input.mygene_query_target",mygene.default_select_callback_name="mygene_query_select_callback",mygene.loadfile=function(e,t,n){if("js"==t)(a=document.createElement("script")).setAttribute("type","text/javascript"),a.setAttribute("src",e);else if("css"==t){var a;(a=document.createElement("link")).setAttribute("rel","stylesheet"),a.setAttribute("type","text/css"),a.setAttribute("href",e)}void 0!==a&&(a.readyState?a.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||n()}:a.onload=n),(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(a)},mygene.add_css=function(e){var t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(document.createTextNode(e)),document.getElementsByTagName("head")[0].appendChild(t)},mygene.genequery=function(e){var t=window.$||window.JQuery,n=t(mygene.input_selector);n.autocomplete({source:function(e,n){t.ajax({url:"//mygene.info/v3/query",dataType:"jsonp",jsonp:"callback",data:{q:e.term,species:"human",size:20},success:function(e){e.total>0?n(t.map(e.hits,function(e){return t.extend(e,{label:e.symbol+": "+e.name,id:e._id,value:e.symbol})})):n([{label:"no matched gene found.",value:""}])}})},minLength:2,select:e||mygene.default_select_callback,open:function(){t(this).removeClass("ui-corner-all").addClass("ui-corner-top")},close:function(){t(this).removeClass("ui-corner-top").addClass("ui-corner-all")}}),void 0===n.attr("title")&&n.attr("title","Powered by mygene.info")},mygene.default_select_callback=function(e,t){alert(t.item?"Selected: "+t.item.label+"("+t.item.id+")":"Nothing selected, input was "+this.value)},mygene_init=function(){function e(){var e=window.$||window.JQuery;void 0===e.ui||"1.8.21"!==e.ui.version?mygene.loadfile(mygene.url_root+"js/jquery-ui-1.8.21.custom.min.js","js",t):t()}function t(){mygene.genequery(window[mygene.default_select_callback_name]),mygene.loadfile(mygene.url_root+"css/ui-lightness/jquery-ui-1.8.21.custom.css","css"),mygene.add_css('.ui-autocomplete-loading { background: white url("'+mygene.url_root+'img/ui-anim_basic_16x16.gif") right center no-repeat; }')}var n;void 0===(n=window.$||window.JQuery)||"1.7.2"!==n.fn.jquery?mygene.loadfile(mygene.url_root+"js/jquery-1.7.2.min.js","js",e):e()},mygene_init();