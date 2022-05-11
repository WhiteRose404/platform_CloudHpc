FROM python

WORKDIR /usr/src/app
RUN pip install django
COPY ./app .

ENTRYPOINT [ "python", "manage.py", "runserver", "0.0.0.0:8000"]