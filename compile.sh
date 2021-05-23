#!/usr/bin/env bash

for m in *.md; do
    python3 md.py $m
done