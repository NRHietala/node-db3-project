-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select
p.ProductName, c.CategoryName
from product p
join category c
on p.CategoryId = c.Id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
select
o.Id, s.CompanyName as "Company Name"
from [order] o
join shipper s
on o.shipvia = s.id
where o.orderdate < "2012-08-09"

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
select
o.OrderId, p.ProductName, o.quantity
from orderdetail o
join product p
on o.productid = p.id
where o.orderid = "10251"
order by ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.
select
o.Id as OrderId, c.CompanyName,e.LastName
from [order] o
join employee e
on o.employeeid = e.id
join customer c
on o.customerid = c.id