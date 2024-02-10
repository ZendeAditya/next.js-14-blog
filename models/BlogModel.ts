import mongoose, { Schema } from "mongoose";
import slugify from "slugify";
const BlogSchema = new Schema(
  {
    coverImg: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);
BlogSchema.pre("save", function (next: () => void) {
  if (this.isModified("title")) {
    this.slug = slugify(this.title, { lower: true, remove: /[*+~.()'"!:@]/g });
  }
  next();
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);

export default Blog;
