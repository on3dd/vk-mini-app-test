declare module '*.png';

// In a .d.ts file or .ts file that is not a module:
declare module '@test' {
  import React from 'react';
  import { AnyAction } from 'redux';

  import { UserInfo } from '@vkontakte/vk-bridge';

  export interface Action extends AnyAction {
    type: string;
    payload: any;
  }

  export interface AsyncAction extends Action {
    err: string;
  }

  export type User = UserInfo | null;
  export type Popout = React.ReactElement | null;

  export interface Album {
    id: number;
    userId: number;
    title: string;
  }

  export interface Photo {
    id: number;
    albumId: number;
    title: string;
    url: string;
    thumbnailUrl: string;
  }

  export interface State<T> {
    data: T[];
    isFetching: boolean;
    hasError: boolean;
    errorMessage: null | string;
  }

  export interface AlbumsState extends State<Album> {}
  export interface PhotosState extends State<Photo> {}

  export interface RootState {
    albums: AlbumsState;
    photos: PhotosState;
  }
}
