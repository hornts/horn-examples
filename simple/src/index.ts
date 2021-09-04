import { HornFactory } from '@hornts/core';
import { ExpressAdapter } from '@hornts/http-express';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await HornFactory.create(AppModule, { http: new ExpressAdapter() });

  await app.listen(8080);
}

bootstrap();
