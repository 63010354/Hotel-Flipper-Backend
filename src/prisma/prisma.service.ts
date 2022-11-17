import { INestApplication, Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
    async onModuleInit() {
        await this.$connect();
    }
    async enableShutdownHooks(apps: INestApplication) {
        this.$on('beforeExit',async () => {
            await apps.close();
        })
    }
        
}
    // constructor() {
    //     super({
    //         datasource: {
    //             db: {
    //                 url: 'mongodb+srv://hotel-flipper:2BEZrUybH0KDnTcM@cluster0.sbse9oq.mongodb.net/test'
    //             }
    //         }
    //     })
    // }

