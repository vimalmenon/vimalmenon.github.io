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
