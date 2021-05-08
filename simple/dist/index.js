"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@hornts/core");
const http_express_1 = require("@hornts/http-express");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.HornFactory.create(app_module_1.AppModule, new http_express_1.ExpressAdapter());
    app.listen(8080);
}
bootstrap();
//# sourceMappingURL=index.js.map