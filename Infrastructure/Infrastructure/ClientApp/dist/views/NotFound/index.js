var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
var NotFound = /** @class */ (function (_super) {
    __extends(NotFound, _super);
    function NotFound(props) {
        return _super.call(this, props) || this;
    }
    NotFound.prototype.render = function () {
        return (React.createElement("div", null, "Sorry , page not found"));
    };
    return NotFound;
}(React.Component));
export default NotFound;
//# sourceMappingURL=index.js.map