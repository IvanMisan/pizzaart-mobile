import { TranslateLoader } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export function createTranslateLoader(http: HttpClient): TranslateLoader {
  return {
    getTranslation: (lang: string): Observable<any> =>
      http.get(`/assets/i18n/${lang}.json`)
  };
}
