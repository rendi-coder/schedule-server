import express from 'express';
import articleCotroller from '../../controllers/article';

const articleRouter = express.Router();

articleRouter.get('/timetable/:id', articleCotroller.getArticlesByTimeTableId);

articleRouter.post('/', articleCotroller.createArticle);

export default articleRouter;
