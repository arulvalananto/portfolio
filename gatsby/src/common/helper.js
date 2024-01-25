import constants from './constants';

export const formatToURLString = (string) => string.replaceAll(' ', '+');

export const buildImageUrl = (tech) =>
    `${constants.AWS_CLOUNDFRONT_URL}/technology/${formatToURLString(tech)}`;
