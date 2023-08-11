-- CREATE DATABASE WAREHOUSE;

USE WAREHOUSE;

-- Create CITIES table
CREATE TABLE CITIES (
    CITY CHAR(20),
    STATE CHAR(20),
    PRIMARY KEY (CITY)
);

-- Create WAREHOUSES table
CREATE TABLE WAREHOUSES (
    WID INTEGER PRIMARY KEY,
    WNAME CHAR(30),
    LOCATION CHAR(20),
    EXTRA_CONTEXT JSON
);

-- Create STORES table
CREATE TABLE STORES (
    SID INTEGER PRIMARY KEY,
    STORE_NAME CHAR(20),
    LOCATION_CITY CHAR(20),
    FOREIGN KEY (LOCATION_CITY) REFERENCES CITIES(CITY)
);

-- Create CUSTOMER table
CREATE TABLE CUSTOMER (
    CNO INTEGER PRIMARY KEY,
    CNAME CHAR(50),
    ADDR VARCHAR(50),
    CU_CITY CHAR(20),
    FOREIGN KEY (CU_CITY) REFERENCES CITIES(CITY)
);

-- Create ORDERS table
CREATE TABLE ORDERS (
    ONO INT PRIMARY KEY,
    ODATE DATE,
    CNO INTEGER,
    FOREIGN KEY (CNO) REFERENCES CUSTOMER(CNO)
);

-- Create ITEMS table
CREATE TABLE ITEMS (
    ITEMNO INTEGER PRIMARY KEY,
    DESCRIPTION TEXT,
    WEIGHT DECIMAL(5,2),
    COST DECIMAL(5,2)
);

-- Create ORDERS_ITEMS (M-to-M) relationship table with ordered_quantity
CREATE TABLE ORDERS_ITEMS (
    ONO INT,
    ITEMNO INT,
    ORDERED_QUANTITY INT,
    PRIMARY KEY (ONO, ITEMNO),
    FOREIGN KEY (ONO) REFERENCES ORDERS(ONO),
    FOREIGN KEY (ITEMNO) REFERENCES ITEMS(ITEMNO)
);



-- Create STORES_ITEMS (M-to-M) relationship table with quantity
CREATE TABLE STORES_ITEMS (
    SID INT,
    ITEMNO INT,
    QUANTITY INT,
    PRIMARY KEY (SID, ITEMNO),
    FOREIGN KEY (SID) REFERENCES STORES(SID),
    FOREIGN KEY (ITEMNO) REFERENCES ITEMS(ITEMNO)
);

-- Establishing relationships between tables
ALTER TABLE WAREHOUSES ADD FOREIGN KEY (LOCATION) REFERENCES CITIES(CITY);



-- Insert data into CITIES
INSERT INTO CITIES (CITY, STATE)
VALUES
    ('Hyderabad', 'Telangana'),
    ('Banglore', 'Karnataka'),
	('Pune', 'Maharastra');
    
-- Insert data into WAREHOUSES
INSERT INTO WAREHOUSES (WID, WNAME, LOCATION, EXTRA_CONTEXT)
VALUES
    (1, 'Warehouse1', 'Hyderabad', '{"attribute": "amazon"}'),
    (2, 'Warehouse2', 'Banglore', '{"attribute": "flipkart"}'),
     (3, 'Warehouse3', 'Pune', '{"attribute": "ajio"}');

-- Insert data into STORES
INSERT INTO STORES (SID, STORE_NAME, LOCATION_CITY)
VALUES
    (1, 'Store1', 'Hyderabad'),
    (2, 'Store2', 'Banglore'),
    (3, 'Store3', 'Pune');

-- Insert data into CUSTOMER
INSERT INTO CUSTOMER (CNO, CNAME, ADDR, CU_CITY)
VALUES
    (1, 'Kavya', 'Address1', 'Hyderabad'),
    (2, 'Patil', 'Address2', 'Banglore'),
    (3, 'Kiran', 'Address3', 'Pune'),
       (4, 'Yash', 'Address4', 'Hyderabad'),
       (5, 'Tanish', 'Address5', 'Hyderabad');

-- Insert data into ORDERS
INSERT INTO ORDERS (ONO, ODATE, CNO)
VALUES
    (1, '2023-08-10', 1),
    (2, '2023-08-09', 2),
    (3, '2023-08-10', 2),
     (4, '2023-08-10', 3),
     (5, '2023-08-09', 3),
  (6, '2023-08-09', 2),
    (7, '2023-08-09', 2),
     (8, '2023-08-09', 1),
    (9, '2023-08-09', 1);
    
-- Insert data into ITEMS
INSERT INTO ITEMS (ITEMNO, DESCRIPTION, WEIGHT, COST)
VALUES
    (1, 'Item1', 2.5, 10.99),
    (2, 'Item2', 1.8, 5.99),
    (3, 'Item3', 3, 100),
    (4, 'Item4', 4.5, 500),
    (5, 'Item5', 2.4, 700),
    (6, 'Item6', 9.8, 7.99),
    (7, 'Item7', 11, 200),
    (8, 'Item8', 2.5, 2.5),
    (9, 'Item9', 6, 900);

-- Insert data into ORDER_ITEMS
INSERT INTO ORDERS_ITEMS (ONO, ITEMNO, ORDERED_QUANTITY)
VALUES
    (1, 1, 5),
    (2, 2, 3),
     (3, 3, 2),
      (4, 4, 3),
       (5, 5, 2),
        (6, 6, 5),
         (7, 7, 4),
          (8, 8, 7),
           (9, 9, 4);

-- Insert data into STORE_ITEMS
INSERT INTO STORES_ITEMS (SID, ITEMNO, QUANTITY)
VALUES
    (1, 1, 50),
    (2, 2, 30),
     (3, 3, 20),
      (1, 4, 30),
       (2, 5, 20),
        (3, 6, 50),
         (1, 7, 40),
          (2, 8, 70),
           (3, 9, 40);




