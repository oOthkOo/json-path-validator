var jpv = function (obj, path, def) {
            var self = this;

            if (!obj) {
                return def ? def : null;
            }

            var parts = path.split(".");
            for (var i = 0; i < parts.length; i++) {
                var key = parts[i];
                var arr = false;
                var value = null;
                var index = 0;
                if (key.indexOf('[') > -1) {
                    var r = key.match(/[0-9]+/g);
                    index = r[0];            
                    key = key.replace(/\[[0-9]+\]/g,'');
                    arr = true;
                }
                if (arr) {
                    if (obj != null &&
                        typeof obj[key] !== 'undefined' &&
                        typeof obj[key][index] !== 'undefined') {
                        value = obj[key][index];
                    }
                    else {
                        return def ? def : null;
                    }
                }
                else {
                    if (obj != null &&
                        typeof obj[key] !== 'undefined') {
                        value = obj[key];
                    }
                    else {
                        return def ? def : null;
                    }
                }
                obj = value;       
            }
            return value;
        }
