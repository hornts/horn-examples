import { Module, Injectable } from '@hornts/common';


@Injectable()
export class Service {}

@Module({
  injectables: [Service]
})
export class Test{}

@Module({
  imports: [Test]
})
export class AppModule {}
