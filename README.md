![Repo-Image](https://massimo.gg/github-images/anonlinks.webp)

<div align="center">

# anonlinks - link anonymizer

![License](https://img.shields.io/github/license/massimo-rnd/link-anonymizer)
![Issues](https://img.shields.io/github/issues/massimo-rnd/link-anonymizer)
![Forks](https://img.shields.io/github/forks/massimo-rnd/link-anonymizer)
![Stars](https://img.shields.io/github/stars/massimo-rnd/link-anonymizer)
![Last Commit](https://img.shields.io/github/last-commit/massimo-rnd/link-anonymizer)
![GitHub release (latest by date including pre-releases)](https://img.shields.io/github/v/release/massimo-rnd/link-anonymizer?include_prereleases)

</div>

## 🚀 Overview

anonlinks.xyz is a PHP Link Anonymizer (Shortener) with Bootstrap 5 Frontend and MySQL Database connection

## ❗ IMPORTANT ❗

Version 2.0 marks final version of anonlinks. This is due to the fact that I am abandoning this project.

In case anyone is interested in taking over this project, feel free to do so.

## 🎯 Features

- PHP Backend
- Bootstrap & JS Frontend
- MySQL Database connection

## 🛠️ Installation

1. Clone the repository into your /var/www/ folder:
   ```bash
   cd /var/www/
   git clone https://github.com/massimo-rnd/link-anonymizer.git
   ```
2. Create a new Database:
   ```mysql
   CREATE DATABASE IF NOT EXISTS anonlinks;
    USE anonlinks;
    CREATE TABLE links (
    id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
    keylink VARCHAR(64) NOT NULL,
    shorturl TEXT NOT NULL
    );
   ```
3. Change Database credentials in api.php:
    ```php
    // Replace these values with your database connection details
    $db_host = '';
    $db_user = '';
    $db_password = '';
    $db_name = '';
    ```
4. Create new Apache Virtualhost config
5. Visit your site

## 💻 Usage

Creating a new link with anonlinks is simple. Just enter the URL to anonymize in the textbox and click "shorten"

Your shortened link is copied to your clipboard and will look like this:
```bash
https://yoururl.tld/l?[XXXXXX]
```


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/massimo-rnd/link-anonymizer/issues).

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 📊 Repository Metrics

![Repo Size](https://img.shields.io/github/repo-size/massimo-rnd/link-anonymizer)
![Contributors](https://img.shields.io/github/contributors/massimo-rnd/link-anonymizer)
![Commit Activity](https://img.shields.io/github/commit-activity/m/massimo-rnd/link-anonymizer)

---

### 📞 Contact

For any inquiries, feel free to reach out:
- email: [hi@massimo.gg](mailto:hi@massimo.gg)
- X: [massimo-rnd](https://x.com/massimo-rnd)
- [Discord](https://discord.gg/wmC5AA6c)
