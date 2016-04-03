export interface TagsServiceInterface {
  getAll(): void;
  announceTags(tags: Object): void;
  announceErrors(err: Object): void;
}
