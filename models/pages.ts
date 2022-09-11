import { IPages } from 'interfaces/pages';
import { Schema, model, models } from 'mongoose';

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
                title: {
                    type: String,
                },
                description: {
                    type: String,
                },
                project: [
                    {
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
                title: {
                    type: String
                },
                description: {
                    type: String
                }
            }
        ],
        hobbies: {
            title: {
                type: String
            },
            description: {
                type: String
            }
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