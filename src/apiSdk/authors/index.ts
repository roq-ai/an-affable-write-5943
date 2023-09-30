import queryString from 'query-string';
import { AuthorInterface, AuthorGetQueryInterface } from 'interfaces/author';
import { fetcher } from 'lib/api-fetcher';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAuthors = async (query?: AuthorGetQueryInterface): Promise<PaginatedInterface<AuthorInterface>> => {
  return fetcher('/api/authors', {}, query);
};

export const createAuthor = async (author: AuthorInterface) => {
  return fetcher('/api/authors', { method: 'POST', body: JSON.stringify(author) });
};

export const updateAuthorById = async (id: string, author: AuthorInterface) => {
  return fetcher(`/api/authors/${id}`, { method: 'PUT', body: JSON.stringify(author) });
};

export const getAuthorById = async (id: string, query?: GetQueryInterface) => {
  return fetcher(`/api/authors/${id}${query ? `?${queryString.stringify(query)}` : ''}`, {});
};

export const deleteAuthorById = async (id: string) => {
  return fetcher(`/api/authors/${id}`, { method: 'DELETE' });
};
