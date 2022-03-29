"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var index_1 = require("../configs/index");
mongoose
    .connect(index_1.mongodb_server)
    .then(function () {
    console.log('Connected Successful');
})
    .catch(function () {
    console.error('Error in the Connection');
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9uZ29vc2VDb25uZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RiL21vbmdvb3NlQ29ubmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLElBQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVyQywwQ0FBa0U7QUFFbEUsUUFBUTtLQUNMLE9BQU8sQ0FBQyxzQkFBYyxDQUFDO0tBQ3ZCLElBQUksQ0FBQztJQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUM7S0FDRCxLQUFLLENBQUM7SUFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDLENBQUMifQ==