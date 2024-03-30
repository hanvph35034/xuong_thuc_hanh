import Category from "../models/Category.js";
class CategroyController {
  async getCategories(req, res) {
    try {
      const data = await Categroy.get({});
      if (data && data.length > 0) {
        return res.status(200).json({
          message: "lay danh sach thanh cong ",
          data,
        });
      }
      return res.status(404).json({ message: "kh co san pham nao" });
    } catch (error) {
      return res.status(500).json({
        name: error.name,
        message: error.message,
      });
    }
  }
  async createCategoryt(req, res) {
    try {
      const data = await Category.create(req.body);
      console.log(data);
      if (!data) {
        return res.status(404).json({ message: "them san pham that bai" });
      }
    } catch (error) {
      return res.status(500).json({
        name: error.name,
        message: error.message,
      });
    }
  }
  async getCategorieOne(req, res) {
    try {
      const data = await Category.findById(req.params.id);
      if (!data) {
        return res.status(400).json({ message: "lay san pham that bai" });
      }
      return res.status(201).json({
        message: "lay danh sach thanh cong ",
        data,
      });
    } catch (error) {
      return res.status(500).json({
        name: error.name,
        message: error.message,
      });
    }
  }
  async updateCategoryById(req, res) {
    try {
      const data = await Category.findByIdAndUpdate(
        `${req.params.id}`,
        req.body,
        {
          new: true,
        }
      );
      if (!data) {
        return res.status(400).json({ message: "Cap nhat san pham that bai!" });
      }
      return res.status(201).json({
        message: "Cap nhat san pham thanh cong!",
        data,
      });
    } catch (error) {
      return res.status(500).json({
        name: error.name,
        message: error.message,
      });
    }
  }
  async removeCategroyById(req, res) {
    try {
      // Assuming `Product` is your Mongoose model
      const data = await Category.findByIdAndDelete(req.params.id);
      if (data) {
        return res.status(200).json({
          message: "Xoa san pham thanh cong!",
          data,
        });
      }
      return res.status(400).json({
        message: "Xoa san pham that bai!",
      });
    } catch (error) {
      return res.status(500).json({
        name: error.name,
        message: error.message,
      });
    }
  }
}
export default CategroyController;
