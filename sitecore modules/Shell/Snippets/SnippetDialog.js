﻿function GetDialogArguments() {
    return getRadWindow().ClientParameters;
}

function getRadWindow() {
    if (window.radWindow) {
        return window.radWindow;
    }

    if (window.frameElement && window.frameElement.radWindow) {
        return window.frameElement.radWindow;
    }

    return null;
}

var isRadWindow = true;

var radWindow = getRadWindow();

if (radWindow) {
    if (window.dialogArguments) {
        radWindow.Window = window;
    }
}

function scClose(html) {
    getRadWindow().close(html);
}

function scCancel() {
    getRadWindow().close();
}

function scCloseWebEdit(url) {
    window.returnValue = url;
    window.close();
}

if (window.focus && Prototype.Browser.Gecko) {
    window.focus();
}