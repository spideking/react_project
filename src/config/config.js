const config = {
    URLENDPOINT: String(import.meta.env.VITE_APPWRITE_URL_END_POINT),
    PROJECTID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    BUCKETID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    COLLECTIONID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    DBID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
};

export default config;
