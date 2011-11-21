#!/bin/bash

for file 
do
	mv $file ${file##dsn_};
done
