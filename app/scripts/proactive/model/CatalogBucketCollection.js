define(
    [
        'backbone',
        'proactive/model/CatalogRestBucket'
    ],

    function (Backbone, RestBucket) {

        "use strict";

        return Backbone.Collection.extend({
            model: RestBucket,
            url: '/catalog/buckets',
            parse: function(data) {
                if (data.page.totalElements > 0) {
                    return data._embedded.bucketMetadataList;
                }
                else {
                    return [];
                }
            }
        });
    })
