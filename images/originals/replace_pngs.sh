#!/bin/bash

for file
do
	newfile="../${file%%jpg}png"
	rm $newfile
	cp $file ..
done	
