import { Icategories } from 'interfaces/categories';
import { Schema, model, models } from 'mongoose';


export var categoriesschema = new Schema<Icategories>({
  name: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true,
    unique: true
  },
  since: {
    type: Date,
    default: Date.now
  }
});


const Categories = models.categories || model<Icategories>('categories', categoriesschema);

export default Categories;