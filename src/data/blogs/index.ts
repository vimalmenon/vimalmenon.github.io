const topics = [
  {
    link: '',
    name: '',
    tags: ['test', 'command'],
    text: `
    <div style="font-family: 'Roboto', sans-serif; margin: 0 auto; padding: 24px;">
  <div style="margin-bottom: 32px;">
    <h1 style="color: #1976d2; font-weight: 500; border-bottom: 1px solid #e0e0e0; padding-bottom: 16px;">
      10 Must-Know Linux Commands for Beginners (With Examples)
    </h1>
    <p style="color: #424242; font-size: 16px; line-height: 1.6;">
      If you're new to Linux, the command line can seem intimidating. But mastering a few essential commands will give you the confidence to navigate and manage your system efficiently. Here are 10 fundamental Linux commands every beginner should know.
    </p>
  </div>

  <!-- Command 1 -->
  <div style="background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 24px; margin-bottom: 24px;">
    <h2 style="color: #1976d2; font-weight: 500; margin-top: 0;">1. ls – List Directory Contents</h2>
    <p style="color: #424242;">Lists files and directories in the current folder.</p>
    <div style="background: #f5f5f5; border-radius: 4px; padding: 16px; margin: 16px 0; font-family: 'Roboto Mono', monospace;">
      <div>ls</div>
      <div>ls -l <span style="color: #757575;">(detailed list)</span></div>
      <div>ls -a <span style="color: #757575;">(show hidden files)</span></div>
    </div>
  </div>

  <!-- Command 2 -->
  <div style="background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 24px; margin-bottom: 24px;">
    <h2 style="color: #1976d2; font-weight: 500; margin-top: 0;">2. cd – Change Directory</h2>
    <p style="color: #424242;">Navigates between folders.</p>
    <div style="background: #f5f5f5; border-radius: 4px; padding: 16px; margin: 16px 0; font-family: 'Roboto Mono', monospace;">
      <div>cd Documents</div>
      <div>cd .. <span style="color: #757575;">(go up one level)</span></div>
      <div>cd ~ <span style="color: #757575;">(go to home directory)</span></div>
    </div>
  </div>

  <!-- Command 3 -->
  <div style="background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 24px; margin-bottom: 24px;">
    <h2 style="color: #1976d2; font-weight: 500; margin-top: 0;">3. mkdir & rmdir – Create/Remove Directories</h2>
    <div style="background: #f5f5f5; border-radius: 4px; padding: 16px; margin: 16px 0; font-family: 'Roboto Mono', monospace;">
      <div>mkdir new_folder</div>
      <div>rmdir empty_folder <span style="color: #757575;">(only works on empty directories)</span></div>
    </div>
  </div>

  <!-- Command 4 -->
  <div style="background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 24px; margin-bottom: 24px;">
    <h2 style="color: #1976d2; font-weight: 500; margin-top: 0;">4. File Operations: cp, mv, rm</h2>
    <div style="font-family: 'Roboto Mono', monospace;">
      <div style="padding: 8px 0;">• cp file.txt backup/ <span style="color: #757575;">(copy)</span></div>
      <div style="padding: 8px 0;">• mv old.txt new.txt <span style="color: #757575;">(rename/move)</span></div>
      <div style="padding: 8px 0;">• rm file.txt <span style="color: #757575;">(delete – use carefully!)</span></div>
    </div>
  </div>

  <!-- Command 5 -->
  <div style="background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 24px; margin-bottom: 24px;">
    <h2 style="color: #1976d2; font-weight: 500; margin-top: 0;">5. grep – Search Text</h2>
    <p style="color: #424242;">Searches for patterns in files.</p>
    <div style="background: #f5f5f5; border-radius: 4px; padding: 16px; margin: 16px 0; font-family: 'Roboto Mono', monospace;">
      grep "error" logfile.txt
    </div>
  </div>

  <!-- Command 6 -->
  <div style="background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 24px; margin-bottom: 24px;">
    <h2 style="color: #1976d2; font-weight: 500; margin-top: 0;">6. chmod – Change Permissions</h2>
    <p style="color: #424242;">Modifies file permissions (read/write/execute).</p>
    <div style="background: #f5f5f5; border-radius: 4px; padding: 16px; margin: 16px 0; font-family: 'Roboto Mono', monospace;">
      <div>chmod 755 script.sh <span style="color: #757575;"># Owner: rwx, Others: rx</span></div>
      <div>chmod +x executable_file</div>
    </div>
  </div>

  <!-- Command 7 -->
  <div style="background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 24px; margin-bottom: 24px;">
    <h2 style="color: #1976d2; font-weight: 500; margin-top: 0;">7. sudo – Superuser Do</h2>
    <p style="color: #424242;">Run commands with administrative privileges.</p>
    <div style="background: #f5f5f5; border-radius: 4px; padding: 16px; margin: 16px 0; font-family: 'Roboto Mono', monospace;">
      sudo apt update <span style="color: #757575;">(Ubuntu/Debian)</span>
    </div>
    <div style="background: #fff8e1; border-left: 4px solid #ffc107; padding: 12px; margin-top: 16px; font-style: italic;">
      Use sudo cautiously – it gives full system access!
    </div>
  </div>

  <!-- Command 8 -->
  <div style="background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 24px; margin-bottom: 24px;">
    <h2 style="color: #1976d2; font-weight: 500; margin-top: 0;">8. man – Manual Pages</h2>
    <p style="color: #424242;">Displays the manual for any command.</p>
    <div style="background: #f5f5f5; border-radius: 4px; padding: 16px; margin: 16px 0; font-family: 'Roboto Mono', monospace;">
      man ls
    </div>
  </div>

  <!-- Command 9 -->
  <div style="background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 24px; margin-bottom: 24px;">
    <h2 style="color: #1976d2; font-weight: 500; margin-top: 0;">9. top/htop – Process Monitoring</h2>
    <p style="color: #424242;">Shows running processes and system resource usage.</p>
    <div style="background: #f5f5f5; border-radius: 4px; padding: 16px; margin: 16px 0; font-family: 'Roboto Mono', monospace;">
      <div>top</div>
      <div>htop <span style="color: #757575;">(more user-friendly, may need installation)</span></div>
    </div>
  </div>

  <!-- Command 10 -->
  <div style="background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 24px; margin-bottom: 24px;">
    <h2 style="color: #1976d2; font-weight: 500; margin-top: 0;">10. df & du – Disk Usage</h2>
    <p style="color: #424242;">Check disk space usage.</p>
    <div style="background: #f5f5f5; border-radius: 4px; padding: 16px; margin: 16px 0; font-family: 'Roboto Mono', monospace;">
      <div>df -h <span style="color: #757575;">(shows disk space in human-readable format)</span></div>
      <div>du -sh * <span style="color: #757575;">(shows directory sizes in current location)</span></div>
    </div>
  </div>

  <!-- Conclusion -->
  <div style="background: #e3f2fd; border-radius: 8px; padding: 24px; margin-top: 32px;">
    <h3 style="color: #0d47a1; margin-top: 0;">Bonus Tip: Combine Commands</h3>
    <p style="color: #424242;">You can chain commands together using pipes (|):</p>
    <div style="background: #f5f5f5; border-radius: 4px; padding: 16px; margin: 16px 0; font-family: 'Roboto Mono', monospace;">
      ls -l | grep ".txt" <span style="color: #757575;">(list only .txt files)</span>
    </div>
    <p style="color: #424242;">Practice these commands regularly to build your Linux skills!</p>
  </div>
</div>
    `,
    title: '10 Must-Know Linux Commands for Beginners (With Examples)',
    type: 'Unix Command',
  },
  {
    link: '',
    name: '',
    tags: ['test', 'command'],
    text: `
    <div style="font-family: 'Roboto', sans-serif; margin: 0 auto; padding: 24px; background-color: #f5f5f5;">
  <!-- Header Section -->
  <div style="text-align: center; margin-bottom: 40px; padding-bottom: 24px; border-bottom: 1px solid #e0e0e0;">
    <h1 style="color: #1976d2; font-weight: 500; margin-bottom: 16px;">Essential Linux Commands Cheat Sheet</h1>
    <p style="color: #757575; font-size: 18px; font-weight: 300;">Master these commands to boost your terminal productivity</p>
    <img src="https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&h=400&q=80" alt="Linux Terminal" style="width: 100%; border-radius: 8px; margin-top: 16px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
  </div>

  <!-- Introduction Card -->
  <div style="background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 24px; margin-bottom: 32px;">
    <h2 style="color: #1976d2; font-weight: 500; margin-top: 0;">Why Learn Command Line?</h2>
    <p style="color: #424242;">The Linux command line is the most powerful way to interact with your system. Unlike GUI tools, the terminal lets you:</p>
    <ul style="color: #424242;">
      <li>Automate repetitive tasks with scripts</li>
      <li>Remotely manage servers via SSH</li>
      <li>Process text/data efficiently</li>
      <li>Troubleshoot system issues</li>
    </ul>
    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&h=300&q=80" alt="Command Line Benefits" style="width: 100%; border-radius: 4px; margin-top: 16px;">
  </div>

  <!-- File Commands Section -->
  <div style="background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 24px; margin-bottom: 32px;">
    <h2 style="color: #1976d2; font-weight: 500; margin-top: 0;">File Operations</h2>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 16px;">
      <div>
        <h3 style="color: #0d47a1; font-weight: 500;">Basic Commands</h3>
        <div style="background: #f5f5f5; border-radius: 4px; padding: 12px; font-family: 'Roboto Mono', monospace; margin-bottom: 8px;">
          ls -lah <span style="color: #757575;"># List all files</span>
        </div>
        <div style="background: #f5f5f5; border-radius: 4px; padding: 12px; font-family: 'Roboto Mono', monospace; margin-bottom: 8px;">
          cp -v file.txt backup/
        </div>
        <div style="background: #f5f5f5; border-radius: 4px; padding: 12px; font-family: 'Roboto Mono', monospace;">
          find . -name "*.log"
        </div>
      </div>
      
      <div>
        <h3 style="color: #0d47a1; font-weight: 500;">Permissions</h3>
        <div style="background: #f5f5f5; border-radius: 4px; padding: 12px; font-family: 'Roboto Mono', monospace; margin-bottom: 8px;">
          chmod 755 script.sh
        </div>
        <div style="background: #f5f5f5; border-radius: 4px; padding: 12px; font-family: 'Roboto Mono', monospace; margin-bottom: 8px;">
          chown user:group file
        </div>
        <div style="background: #f5f5f5; border-radius: 4px; padding: 12px; font-family: 'Roboto Mono', monospace;">
          stat -c "%a %n" *
        </div>
      </div>
    </div>
    
    <img src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&h=200&q=80" alt="Linux File System" style="width: 100%; border-radius: 4px; margin-top: 16px;">
  </div>

  <!-- System Monitoring Section -->
  <div style="background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 24px; margin-bottom: 32px;">
    <h2 style="color: #1976d2; font-weight: 500; margin-top: 0;">System Monitoring</h2>
    
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 16px 0;">
      <div style="background: #e8f5e9; padding: 12px; border-radius: 4px;">
        <div style="font-family: 'Roboto Mono', monospace;">top -o %MEM</div>
        <p style="color: #2e7d32; font-size: 14px;">Show processes sorted by memory usage</p>
      </div>
      <div style="background: #e8f5e9; padding: 12px; border-radius: 4px;">
        <div style="font-family: 'Roboto Mono', monospace;">df -hT</div>
        <p style="color: #2e7d32; font-size: 14px;">Disk space with filesystem types</p>
      </div>
      <div style="background: #e8f5e9; padding: 12px; border-radius: 4px;">
        <div style="font-family: 'Roboto Mono', monospace;">free -h</div>
        <p style="color: #2e7d32; font-size: 14px;">Memory usage in human format</p>
      </div>
      <div style="background: #e8f5e9; padding: 12px; border-radius: 4px;">
        <div style="font-family: 'Roboto Mono', monospace;">lsof -i :8080</div>
        <p style="color: #2e7d32; font-size: 14px;">Find process using port 8080</p>
      </div>
    </div>
    
    <div style="background: #fff8e1; border-left: 4px solid #ffc107; padding: 12px; margin: 16px 0;">
      <p style="margin: 0; font-style: italic;">Tip: Install <span style="font-family: 'Roboto Mono', monospace; background: #fffde7; padding: 2px 4px;">ncdu</span> for interactive disk usage analysis</p>
    </div>
    
    <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&h=300&q=80" alt="System Monitoring" style="width: 100%; border-radius: 4px;">
  </div>

  <!-- Networking Section -->
  <div style="background: white; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); padding: 24px; margin-bottom: 32px;">
    <h2 style="color: #1976d2; font-weight: 500; margin-top: 0;">Networking Commands</h2>
    
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin: 16px 0;">
      <div>
        <div style="background: #e3f2fd; padding: 12px; border-radius: 4px; font-family: 'Roboto Mono', monospace; font-size: 14px;">
          ping example.com
        </div>
      </div>
      <div>
        <div style="background: #e3f2fd; padding: 12px; border-radius: 4px; font-family: 'Roboto Mono', monospace; font-size: 14px;">
          traceroute google.com
        </div>
      </div>
      <div>
        <div style="background: #e3f2fd; padding: 12px; border-radius: 4px; font-family: 'Roboto Mono', monospace; font-size: 14px;">
          netstat -tulnp
        </div>
      </div>
      <div>
        <div style="background: #e3f2fd; padding: 12px; border-radius: 4px; font-family: 'Roboto Mono', monospace; font-size: 14px;">
          ssh user@host -p 2222
        </div>
      </div>
    </div>
    
    <img src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=900&h=200&q=80" alt="Network Commands" style="width: 100%; border-radius: 4px; margin-top: 16px;">
  </div>

  <!-- Footer -->
  <div style="text-align: center; margin-top: 40px; padding-top: 24px; border-top: 1px solid #e0e0e0; color: #757575;">
    <p>Want to learn more? Practice these commands daily to build muscle memory!</p>
    <p style="font-size: 14px;">Pro tip: Use <span style="font-family: 'Roboto Mono', monospace; background: #f5f5f5; padding: 2px 4px;">history | grep "search"</span> to find past commands</p>
  </div>
</div>
    `,
    title: 'Essential Linux Commands Cheat Sheet',
    type: 'Unix Command',
  },
];

const commands = {
  link: 'command',
  name: '',
  title: 'This is Commands',
  topics,
};

const vimCommand = {
  link: 'vim',
  name: '',
  title: 'This is Vim Command',
  topics: [],
};

export const blogs = [commands, vimCommand];
