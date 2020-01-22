import { Deserializable } from './deserializable';

export class Blog implements Deserializable {
    public blog_id: number;
    public user_id: number;
    public title: string;
    public description: string;
    public image: string;
    public created_at: string;
    public updated_at: string;

    deserialize(input: any){
        return Object.assign(this, input);
    }

    /**
     * getBloggerName
     */
    public getBloggerName() {
        return this.user_id;
    }

}
