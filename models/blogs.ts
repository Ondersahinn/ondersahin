import { IBlog } from 'interfaces/blogs';
import { IUser } from 'interfaces/user';
import { Schema, model, models } from 'mongoose';


export var BlogSchema = new Schema<IBlog>({
  title: {
    type: String,
    required: true
  },
  shortDesc: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'Users'
  },
  since: {
    type: Date,
    default: Date.now
  }
});


const Blogs = models.blogs || model<IBlog>('blogs', BlogSchema);

export default Blogs;