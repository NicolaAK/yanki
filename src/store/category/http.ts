import { http, ICommonResponse } from '@utils/http';
import { ICategory } from '@store/category/types';

export const fetchCategoryListRequest = () => http.get<void, ICommonResponse<Array<ICategory>>>('category');
