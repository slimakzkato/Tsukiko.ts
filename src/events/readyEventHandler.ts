import { EventBase } from "./eventBase";
import { Client } from "discord.js";
import { TsuParameters } from "..";

export class ReadyEventHandler extends EventBase {
    constructor(client: Client, parameters: TsuParameters) {
        super(client, parameters);        
    }

    protected RegisterEvent() {
        this.client.on('ready', () => {
            this.GetLogChannel().send(this.BuildEmbedLogMessage(`Ready`, `Bot has ben initialized succesfully!`));
        });
    }
}