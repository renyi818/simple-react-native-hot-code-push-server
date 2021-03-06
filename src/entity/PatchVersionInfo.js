/*!
 * BusinessInfo
 * Copyright(c) 2009-2017 Marcus Ma
 * E-mail:maji1991@sina.com
 * GitHub : https://github.com/MarcusMa
 * MIT Licensed
 */
'use strict';

/**
 * Module dependencies.
 */
function PatchVersionInfo(id, patchVersion, patchHashCode, patchFilePath) {
    this.businessId = id;
    this.version = patchVersion;
    this.hashCode = patchHashCode;
    this.filePath = patchFilePath;
}

PatchVersionInfo.prototype.getDownloadUrl = _getDownloadUrl;
PatchVersionInfo.prototype.toString = _toString;

function _getDownloadUrl() {
    //FIXME
    var ret = null;
    if (this.filePath) {
        ret = this.filePath.substr(9);
    }
    return ret;
}

function _toString() {
    return "businessId: " + this.businessId +
        " , version: " + this.version +
        " , hashcode: " + this.hashCode +
        " , filePath: " + this.filePath;
}


module.exports = PatchVersionInfo;