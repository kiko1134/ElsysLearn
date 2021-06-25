import unittest
from selenium import webdriver
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.webdriver.support.wait import WebDriverWait

import time

PATH = '/home/vpaligorov/Desktop/chromedriver_linux64/chromedriver'


# PATH = '/home/kris/Desktop/chromedriver_linux64/chromedriver'
# driver = webdriver.Chrome(PATH)
# driver.get("http://127.0.0.1:5000")


class ElsysLearnTests(unittest.TestCase):

    def setUp(self):
        self.driver = webdriver.Chrome(PATH)
        self.driver.get("http://127.0.0.1:5000")
        self.driver.maximize_window()

    def test_1_register(self):
        register = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, "register")))
        register.click()
        fullname = self.driver.find_element_by_name("fullname")
        fullname.send_keys("1")
        email = self.driver.find_element_by_name("email")
        email.send_keys("1@gmail.com")
        password = self.driver.find_element_by_name('password1')
        password.send_keys("1")
        password2 = self.driver.find_element_by_name("password2")
        password2.send_keys("1")
        time.sleep(1)
        self.driver.find_element_by_name("button").click()
        time.sleep(1)

    def test_2_login_grades_logout(self):
        login = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, "login")))
        login.click()
        email = self.driver.find_element_by_name("email")
        email.send_keys("1@gmail.com")
        username = self.driver.find_element_by_name("username")
        username.send_keys("1")
        password = self.driver.find_element_by_name("password")
        password.send_keys("1")
        time.sleep(1)
        self.driver.find_element_by_name("button").click()
        time.sleep(1)
        self.driver.find_element_by_id("grades").click()
        time.sleep(1)
        self.driver.find_element_by_id("logout").click()
        time.sleep(2)

    def test_3_DBLesson1(self):
        self.driver.get("http://127.0.0.1:5000/OverallDB1")
        time.sleep(1)
        self.driver.find_element_by_id("1.2").click()
        self.driver.find_element_by_id("2.3").click()
        self.driver.find_element_by_id("3.1").click()
        self.driver.find_element_by_id("4.4").click()
        self.driver.find_element_by_id("5.3").click()
        self.driver.find_element_by_id("6.2").click()
        time.sleep(1)
        self.driver.find_element_by_id("button").click()
        time.sleep(1)

    def test_4_DBLesson2(self):
        self.driver.get("http://127.0.0.1:5000/OverallDB2")
        time.sleep(1)
        self.driver.find_element_by_id("1.3").click()
        self.driver.find_element_by_id("2.1").click()
        self.driver.find_element_by_id("3.3").click()
        self.driver.find_element_by_id("4.2").click()
        self.driver.find_element_by_id("5.4").click()
        self.driver.find_element_by_id("6.2").click()
        time.sleep(1)
        self.driver.find_element_by_id("button").click()
        time.sleep(1)

    def test_5_DBLesson3(self):
        self.driver.get("http://127.0.0.1:5000/OverallDB3")
        time.sleep(1)
        self.driver.find_element_by_id("1.4").click()
        self.driver.find_element_by_id("2.3").click()
        self.driver.find_element_by_id("3.1").click()
        self.driver.find_element_by_id("4.1").click()
        self.driver.find_element_by_id("5.2").click()
        self.driver.find_element_by_id("6.2").click()
        time.sleep(1)
        self.driver.find_element_by_id("button").click()
        time.sleep(1)

    def test_6_DBLesson4(self):
        self.driver.get("http://127.0.0.1:5000/OverallDB4")
        time.sleep(1)
        self.driver.find_element_by_id("1.3").click()
        self.driver.find_element_by_id("2.2").click()
        self.driver.find_element_by_id("3.1").click()
        self.driver.find_element_by_id("4.2").click()
        self.driver.find_element_by_id("5.3").click()
        self.driver.find_element_by_id("6.2").click()
        time.sleep(1)
        self.driver.find_element_by_id("button").click()
        time.sleep(1)

    def test_7_DBLesson5(self):
        self.driver.get("http://127.0.0.1:5000/OverallDB5")
        time.sleep(1)
        self.driver.find_element_by_id("1.4").click()
        self.driver.find_element_by_id("2.1").click()
        self.driver.find_element_by_id("3.2").click()
        self.driver.find_element_by_id("4.3").click()
        self.driver.find_element_by_id("5.1").click()
        self.driver.find_element_by_id("6.2").click()
        time.sleep(1)
        self.driver.find_element_by_id("button").click()
        time.sleep(1)

    def test_8_DBLesson6(self):
        self.driver.get("http://127.0.0.1:5000/OverallDB6")
        time.sleep(1)
        self.driver.find_element_by_id("1.4").click()
        self.driver.find_element_by_id("2.1").click()
        self.driver.find_element_by_id("3.2").click()
        self.driver.find_element_by_id("4.3").click()
        self.driver.find_element_by_id("5.1").click()
        self.driver.find_element_by_id("6.2").click()
        time.sleep(1)
        self.driver.find_element_by_id("button").click()
        time.sleep(1)

    def test_9_Footer(self):
        Facebook = WebDriverWait(self.driver, 60).until(EC.element_to_be_clickable((By.ID, "Facebook")))
        Facebook.click()

        Twitter = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, "Twitter")))
        Twitter.click()

        Google = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, "Google")))
        Google.click()

        Instagram = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, "Instagram")))
        Instagram.click()

        LinkedIn = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, "Linkedin")))
        LinkedIn.click()

        GitHub = WebDriverWait(self.driver, 10).until(EC.element_to_be_clickable((By.ID, "GitHub")))
        GitHub.click()

        time.sleep(1)

    def tearDown(self):
        self.driver.quit()


if __name__ == "__main__":
    unittest.main()
