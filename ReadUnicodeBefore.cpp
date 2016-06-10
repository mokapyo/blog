
TCHAR buf[MAX_LINE];
FILE *fp;

_tfopen_s(&fp, _T("test.reg"), _T("r"));

while (_fgetts(buf, MAX_LINE, fp) != NULL) {
	TCHAR *p = _tcsstr(buf, _T("{"));
	if (p != NULL) {
		CString Guid = p;
	}
}
fclose(fp);

printf("Guid = %s",Guid);
