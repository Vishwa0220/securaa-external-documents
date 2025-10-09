#!/usr/bin/env python3
import os
import glob

# Get all HTML files in docs directory
html_files = glob.glob('/home/ubuntu/go/src/securaa-external-documents/docs/*.html')

for file_path in html_files:
    try:
        # Read file content
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Remove favicon reference line
        lines = content.split('\n')
        new_lines = []
        for line in lines:
            if 'favicon.ico' not in line:
                new_lines.append(line)
        
        # Write back the modified content
        new_content = '\n'.join(new_lines)
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        
        print(f"Processed: {os.path.basename(file_path)}")
    
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

print("Favicon references removed from all HTML files!")