Exercise: Internationalization, Localization and Redis Caching in Django

Scenario: You are working on a Django web application for a global e-commerce store. The store has customers from different parts of the world and needs to support multiple languages. The store also has a product catalog that is accessed frequently and needs to be cached for performance.

Objective: Your task is to internationalize the product catalog, localize it to support English and French, and cache the product catalog using Redis.

Instructions:

1. **Setting up Django Project**

    If you haven't already, set up a new Django project and create a new app called `store`.

2. **Enable Internationalization**

    Enable internationalization in your Django project by setting `USE_I18N = True` in your `settings.py` file.

3. **Define Languages**

    Define English and French as the languages your application will support. Set English as the default language.

4. **Create Locale Directory**

    Create a directory named `locale` in the root of your Django project. This is where Django will look for translation files.

5. **Configure LOCALE_PATHS**

    Configure the `LOCALE_PATHS` setting in your Django settings file to point to the `locale` directory.

6. **Create Product Model**

    Create a `Product` model in your `store` app with the following fields: `name`, `description`, and `price`. Make sure to use the `gettext` function to mark the `name` and `description` fields for translation.

7. **Create Message Files**

    Use the `makemessages` command to create message files for English and French.

8. **Translate Messages**

    Translate the `name` and `description` fields of the `Product` model into French.

9. **Compile Message Files**

    Compile the message files into a binary format that Django can use.

10. **Install and Configure Redis**

    Install Redis on your system and the `django-redis` package in your Django project. Configure Django to use Redis as the cache backend.

11. **Cache Product Catalog**

    In your `store` app, create a view that retrieves all products from the database. Use the Django cache framework to cache the product catalog. The cache should expire after 15 minutes.

12. **Test Your Setup**

    Run your Django development server and access the view that displays the product catalog. Change the language of your application to French and ensure that the product catalog is displayed in French. Also, ensure that the product catalog is being cached by accessing the view multiple times and observing the database queries.

Remember, this is an intermediate exercise and should take you about one hour to complete. Good luck!