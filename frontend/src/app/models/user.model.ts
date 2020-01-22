import { Deserializable } from './deserializable';

export class User implements Deserializable{

    public id: number;
    public name: string;
    public email_verified_at: string;
    public created_at: string;
    public updated_at: string;

    deserialize(input: any){
        return Object.assign(input, this);
    }

}
