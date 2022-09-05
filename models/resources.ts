import { Iresources } from 'interfaces/categories';
import { Schema, model, models } from 'mongoose';


export var resourcesSchema = new Schema<Iresources>({
  key: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true,
    unique: true
  },
  lang:{
    type: String,
    require:true
  },
  since: {
    type: Date,
    default: Date.now
  }
});


const Resources = models.resources || model<Iresources>('resources', resourcesSchema);

export default Resources;