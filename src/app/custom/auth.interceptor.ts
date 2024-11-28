import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      console.log('Token encontrado:', token);
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
      });
      return next(cloned);
    } else {
      console.log('No se encontró token');
    }
  } else {
    console.log('Entorno no es navegador');
  }

  return next(req);

};
