// String Extensions: adding functions to the String prototype

var stringExtensions = {
    /**
     * returns a string with the first letter uppercased, and the remaining characters unchanged.
     *
     * @returns {string} a string with the first letter uppercased, and the remaining characters unchanged.
     */
    upcaseFirst: function() {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },

    /**
     * returns a string with the first letter lowercased, and the remaining characters unchanged.
     *
     * @returns {string} a string with the first letter lowercased, and the remaining characters unchanged.
     */
    lowercaseFirst: function() {
        return this.charAt(0).toLowerCase() + this.slice(1);
    },

    /**
     * returns a string padded to the left with a sequence of characters to a desired length
     *
     * @param {string} padding - character(s) to use for the pad
     * @param {number} length - new desired length
     * @returns {string} a string padded to the left with a sequence of characters to a desired length
     */
    padLeft: function(padding, length) {
        var str = "" + this;
        while(str.length < length) {
            str = "" + padding + str;
        }

        return str;
    },

    /**
     * returns a string padded to the right with a sequence of characters to a desired length
     *
     * @param {string} padding - character(s) to use for the pad
     * @param {number} length - new desired length
     * @returns {string} a string padded to the right with a sequence of characters to a desired length
     */
    padRight: function(padding, length) {
        var str = "" + this;
        while(str.length < length) {
            str = "" + str + padding;
        }

        return str;
    },

    pxLess: function() {
        return Number(this.replace(/[^-\d\.]/g, ''));
    },
};

for(var extension in stringExtensions) {
    if(!String.prototype.hasOwnProperty(extension)) {
        String.prototype[extension] = stringExtensions[extension];
    }
}

require("string-format").extend(String.prototype); // String.format extension.
