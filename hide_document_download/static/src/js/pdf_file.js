//odoo.define('hide_document_download.pdf_file', function (require) {
//"use strict";
//
//
//var core = require('web.core');
//var fieldRegistry = require('web.field_registry');
//var dialogs = require('web.view_dialogs');
//var Widget = require('web.Widget');
//var rpc = require('web.rpc');
//
//var qweb = core.qweb;
//
//var Widget = require('web.Widget');
//
//
//var ActionManager = require('web.ActionManager');
//var core = require('web.core');
//var framework = require('web.framework');
//var session = require('web.session');
//var _t = core._t;
//
//// Action Manager
//ActionManager.include({
//    //--------------------------------------------------------------------------
//    // Private
//    //--------------------------------------------------------------------------
//
//    /**
//     * Downloads a PDF report for the given url. It blocks the UI during the
//     * report generation and download.
//     *
//     * @param {string} url
//     * @returns {Deferred} resolved when the report has been downloaded ;
//     *   rejected if something went wrong during the report generation
//     */
//    _downloadReport: function (url) {
//        var def = $.Deferred();
//        console.log("Report!",url)
//
//        if (!window.open(url)) {
//            // AAB: this check should be done in get_file service directly,
//            // should not be the concern of the caller (and that way, get_file
//            // could return a deferred)
//            var message = _t('A popup window with your report was blocked. You ' +
//                             'may need to change your browser settings to allow ' +
//                             'popup windows for this page.');
//            this.do_warn(_t('Warning'), message, true);
//                    }
//
//        return def;
//            },
//    })
//
//
//
//
//
//});
//
