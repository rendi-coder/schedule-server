import TimeTableArticleModel, {
  ITimeTableArticleCreationAttributes,
} from '../../db/models/timetable-article';

class ArticleService {
  async getArticlesByTimeTableId(timeTableId: number) {
    const articles = await TimeTableArticleModel.findAll({ where: { timeTableId } });

    return articles;
  }

  async createArticle(article: ITimeTableArticleCreationAttributes) {
    const response = await TimeTableArticleModel.create(article);

    return response;
  }
}

export default new ArticleService();
