import { Iresources } from 'interfaces/categories';
import { IPages } from 'interfaces/pages';
import { Schema, model, models, ObjectId } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';


export var pagesSchema = new Schema<IPages>({

    home: {
        title: {
            type: String,
            required: true,
            maxlength: 60,
        },
        metakey: {
            type: String,
            required: true,
        },
        metadescription: {
            type: String,
            required: true,
            maxlength: 160

        },
        content: {
            type: String,
            required: true,
        },
        since: {
            type: Date,
            default: Date.now
        }
    },
    about: {
        experiences: [
            {
                id: {
                    type: String,
                    default: uuidv4(),
                },
                title: {
                    type: String,
                },
                description: {
                    type: String,
                },
                project: [
                    {
                        id: {
                            type: String,
                            default: uuidv4()
                        },
                        name: {
                            type: String,
                        },
                        link: {
                            type: String,
                        }
                    }
                ],
                skils: {
                    type: String
                }
            }
        ],
        education: [
            {
                id: {
                    type: String,
                    default: uuidv4()
                },
                title: {
                    type: String
                },
                description: {
                    type: String
                }
            }
        ],
        hobbies: {
            type: Array<String>
        },
        skils: {
            type: Array<String>
        }
    },
    since: {
        type: Date,
        default: Date.now
    }
});


const Pages = models.pages || model<IPages>('pages', pagesSchema);

export default Pages;