class UrlBuilderHelper {
  api(path) {
    return path;
  }

  coreServiceApi(path) {
    return `http://13.212.68.212:5001/api/v1/${path}`;
  }
  
  jobServiceApi(path) {
    return `http://13.212.68.212:5002/api/v1/${path}`;
  }
  
  resumeServiceApi(path) {
    return `http://13.212.68.212:5003/api/v1/${path}`;
  }
}

export const UrlBuilder = new UrlBuilderHelper();
