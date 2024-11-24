type EximResponseWrapper<T = null> = {
    message: string;
    data?: T;
  };