
angular.module("exampleApp")
    .filter("labelCase", function () {
        return function (value, reverse) {
            if(angular.isString(value)) {
                var intermideate = reverse? value.toUpperCase(): value.toLowerCase();
                return (reverse? intermideate[0].toLowerCase(): intermideate[0].toUpperCase())
                    + intermideate.substring(1);
            } else {
                return true;
            }
        }
    })
    .filter("skip", function () {
        return function (collection, count) {
            if(angular.isArray(collection) && angular.isNumber(count)) {
                if(count > 1 || count <= collection.length) {
                    return collection.slice(count);
                } else {
                    return collection;
                }
            } else {
                return collection;
            }
        }
    })
    .filter("take", function ($filter) {
        return function (data, skipCount, takeCount) {
            var skippedData = $filter("skip")(data, skipCount);
            return $filter("limitTo")(skippedData, takeCount);
        }
    });
