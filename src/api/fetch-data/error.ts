export class HttpError extends Error {
  constructor(response: Response) {
    super(`${response.status} - ${response.statusText}`);
  }
}
