export class Verification {
    verified: boolean;
    reason: string;
    signature?: any;
    payload?: any;

    constructor(definition: any){
        this.verified = definition.verified;
        this.reason = definition.reason;
        this.signature = definition.signature;
        this.payload = definition.payload;
    }
}